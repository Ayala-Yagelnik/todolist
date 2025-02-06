using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace ToDoApi
{
    public static class TokenService
    {
        public static string GenerateToken(User user, IConfiguration configuration)
        {
            // Define the claims for the JWT
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
            };
            // Create the secret key using the configured key
            var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:Key"]));
            var signinCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

            // Create the token options
            var tokenOptions = new JwtSecurityToken(
                issuer: configuration["JWT:Issuer"],
                audience: configuration["JWT:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30), // Set expiration time as needed
                signingCredentials: signinCredentials
            );

            // Generate the token string
            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }
    }
}