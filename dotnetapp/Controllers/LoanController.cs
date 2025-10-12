using dotnetapp.Data;
using dotnetapp.Models.Domain;
using dotnetapp.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnetapp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly ApplicationDbContext dbContext;
        public LoanController(ApplicationDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpPost]
        public async Task<IActionResult> CreateLoan(CreateLoanRquestDto request)
        {
            var loan = new Loan
            {
                LoanType = request.LoanType,
                Description = request.Description,
                InterestRate = request.InterestRate,
                MaximumAmount = request.MaximumAmount
            };

            await dbContext.Loans.AddAsync(loan);
            await dbContext.SaveChangesAsync();

            var response = new LoanDto
            {
                LoanId = loan.LoanId,
                LoanType = loan.LoanType,
                Description = loan.Description,
                InterestRate = loan.InterestRate,
                MaximumAmount = loan.MaximumAmount
            };

            return Ok(response);
        }
    }
}
