using dotnetapp.Data;
using dotnetapp.Models.Domain;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly ILoanService loanService;
        public LoanController(ILoanService loanService)
        {
            this.loanService = loanService;
        }

        [HttpPost("/api/loan")]
        public async Task<IActionResult> CreateLoan(Loan loan)
        {
            bool result = await loanService.CreateAsync(loan);

            if(result)
            {
                return Ok("Loan created successfully!");
            }

            return Conflict("Loan with this type already exists!");
        }

        [HttpGet("/api/loans")]
        public async Task<IActionResult> GetAllLoans()
        {
            var response = await loanService.GetAllAsync();

            return Ok(response);
        }

        [HttpGet("/api/loans/{loanId}")]
        public async Task<IActionResult> GetLoanById(int loanId)
        {
            var response = await loanService.GetByIdAsync(loanId);

            if(response == null)
            {
                return NotFound("Loan not found!");
            }

            return Ok(response);
        }

        [HttpPut("/api/loan")]
        public async Task<IActionResult> UpdateLoan(Loan loan)
        {
            bool result = await loanService.UpdateAsync(loan);

            if(result)
            {
                return Ok("Loan updated successfuly!");

            }

            return Conflict("Loan with this type already exists!");
        }

        [HttpDelete("/api/loans/{loanId}")]
        public async Task<IActionResult> DeleteLoan(int loanId)
        {
            bool result = await loanService.DeleteAsync(loanId);

            if(result)
            {
                return Ok("Loan deleted successfully!");
            }

            return NotFound("Loan not found!");
        }
    }
}
