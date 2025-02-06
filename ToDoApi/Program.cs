using Microsoft.EntityFrameworkCore;
using ToDoApi;
using Microsoft.OpenApi.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using TodoApi;
using System.Security.Claims;
using System.IdentityModel.Tokens.Jwt;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ToDoDbContext>(options =>
    options.UseMySql(builder.Configuration.GetConnectionString("ToDoDB"),
    ServerVersion.Parse("8.0.33-mysql")));

// Add CORS services
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

builder.Services.AddEndpointsApiExplorer();

builder.Services.AddAuthorization();

// Add JWT Authentication services
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    // options.RequireHttpsMetadata = false;
    // options.SaveToken = true;
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidAudience = builder.Configuration["JWT:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
    };
});


// Add Swagger services
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "ToDo API",
        Version = "v1",
        Description = "An ASP.NET Core Web API for managing ToDo items",
    });
    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter into field the word 'Bearer' followed by a space and the JWT value",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        Scheme = "Bearer",
        BearerFormat = "JWT",

    });
    c.AddSecurityRequirement(new OpenApiSecurityRequirement {
    {
        new OpenApiSecurityScheme
        {
            Reference = new OpenApiReference
            {
                Type = ReferenceType.SecurityScheme,
                Id = "Bearer"
            }
        },
        new List<string> ()
    }});
});

var app = builder.Build();

// Enable CORS
app.UseCors();

// Enable Authentication Middleware
app.UseAuthentication();

app.UseRouting();




// Enable Authorization Middleware
app.UseAuthorization();


app.UseSwagger();
app.UseSwaggerUI(c =>
{
    c.SwaggerEndpoint("/swagger/v1/swagger.json", "ToDo API V1");
    c.RoutePrefix = string.Empty;
});

app.MapGet("/", (HttpContext context) => "Todo API is running");

// Map routes
app.MapGet("/tasks", [Authorize] async (ToDoDbContext db) =>
{
    try
    {
        var items = await db.Items.ToListAsync();
        return Results.Ok(items);
    }
    catch (Exception ex)
    {
        return Results.Problem("An error occurred while retrieving tasks: " + ex.Message);
    }
});

app.MapGet("/tasks/{id}", async (ToDoDbContext db, int id) =>
{
    var item = await db.Items.FindAsync(id);
    return item is not null ? Results.Ok(item) : Results.NotFound();
}).RequireAuthorization();

app.MapPost("/tasks", [Authorize] async (ToDoDbContext db, [FromBody] Item newItem) =>
{
    try
    {
        db.Items.Add(newItem);
        await db.SaveChangesAsync();
        return Results.Created($"/tasks/{newItem.Id}", newItem);
    }
    catch (Exception ex)
    {
        return Results.Problem("An error occurred while adding the item: " + ex.Message);
    }
});

app.MapPut("/tasks/{id}", [Authorize] async (ToDoDbContext db, int id, [FromBody] Item updatedItem) =>
{
    try
    {
        var item = await db.Items.FindAsync(id);
        if (item is null)
        {
            return Results.NotFound();
        }

        item.Name = updatedItem.Name;
        item.IsComplete = updatedItem.IsComplete;

        await db.SaveChangesAsync();
        return Results.NoContent();
    }
    catch (Exception ex)
    {
        return Results.Problem("An error occurred while updating the task: " + ex.Message);
    }
});

app.MapDelete("/tasks/{id}", [Authorize] async (ToDoDbContext db, int id) =>
{
    try
    {
        var item = await db.Items.FindAsync(id);
        if (item is null)
        {
            return Results.NotFound();
        }

        db.Items.Remove(item);
        await db.SaveChangesAsync();
        return Results.NoContent();
    }
    catch (Exception ex)
    {
        return Results.Problem("An error occurred while deleting the task: " + ex.Message);
    }
});

app.MapPost("/api/auth/register", async (ToDoDbContext db, IConfiguration configuration, [FromBody] LoginModel loginModel) =>
{
    if (string.IsNullOrEmpty(loginModel.UserName) || string.IsNullOrEmpty(loginModel.Password))
    {
        return Results.BadRequest("Username and password are required.");
    }

    var existingUser = await db.Users.FirstOrDefaultAsync(u => u.Username == loginModel.UserName);
    if (existingUser != null)
    {
        return Results.BadRequest("User already exists.");
    }

    var newUser = new User 
    {  
        Username = loginModel.UserName,
        Password = loginModel.Password,    
    };
    db.Users.Add(newUser);
    await db.SaveChangesAsync();
    var token = TokenService.GenerateToken(newUser,configuration);
    return Results.Ok(new { token });
});

app.MapPost("/api/auth/login", async (ToDoDbContext db,IConfiguration configuration, [FromBody] LoginModel loginUser) =>
{
    var user = await db.Users.FirstOrDefaultAsync(u => u.Username == loginUser.UserName && u.Password == loginUser.Password);
    if (user is null)
    {
        return Results.Unauthorized();
    }
        var claims = new List<Claim>()
        {
            new Claim(ClaimTypes.Name, "Ayala"),
            new Claim(ClaimTypes.Role, "stud")
        };

        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Key"]));
        var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);
        var tokeOptions = new JwtSecurityToken(
            issuer: configuration["JWT:Issuer"],
            audience: configuration["JWT:Audience"],
            claims: claims,
            expires: DateTime.Now.AddMinutes(6),
            signingCredentials: signinCredentials
        );
        var tokenString = new JwtSecurityTokenHandler().WriteToken(tokeOptions);
        return Results.Ok(new { Token = tokenString });
});

app.Run();