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
        private readonly ILoanService loanService;
        public LoanController(ILoanService loanService)
        {
            this.loanService = loanService;
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

            await loanService.CreateAsync(loan);

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

        [HttpGet("/api/Loans")]
        public async Task<IActionResult> GetAllLoans()
        {
            var loans = await loanService.GetAllAsync();
            var response = new List<LoanDto>();

            foreach(var loan in loans)
            {
                response.Add(new LoanDto
                {
                    LoanId = loan.LoanId,
                    LoanType = loan.LoanType,
                    Description = loan.Description,
                    InterestRate = loan.InterestRate,
                    MaximumAmount = loan.MaximumAmount
                });
            }

            return Ok(response);
        }

        [HttpGet("/api/loans/{loanId}")]
        public async Task<IActionResult> GetLoanById(int loanId)
        {
            var loan = await loanService.GetByIdAsync(loanId);

            if(loan  == null)
            {
                return NotFound("Loan not found!");
            }

            var response = new LoanDto
            {
                LoanId = loan.LoanId,
                LoanType = loan.LoanType,
                Description = loan.Description,
                InterestRate = loan.InterestRate,
                MaximumAmount = loan.MaximumAmount,
            };

            return Ok(response);
        }

        [HttpPut("/api/loan")]
        public async Task<IActionResult> UpdateLoan(LoanRequestDto request)
        {
            var loan = new Loan
            {
                LoanId = request.LoanId,
                LoanType = request.LoanType,
                Description = request.Description,
                InterestRate = request.InterestRate,
                MaximumAmount = request.MaximumAmount
            };

            bool result = await loanService.UpdateAsync(loan);

            if(result)
            {
                return Ok("Loan updated successfuly!");

            }

            return Conflict("Loan with this type already exists!");
        }
    }
}
