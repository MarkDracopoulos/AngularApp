using System.ComponentModel.DataAnnotations;

namespace AngularApp.API.Dtos
{
    public class UserForRegisterDto
    {

        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(16, MinimumLength = 4, ErrorMessage = "You must choose a password that is between 4 and 16 characters long.")]
        public string Password { get; set; }
    }
}