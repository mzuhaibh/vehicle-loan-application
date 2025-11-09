using dotnetapp.Data;
using dotnetapp.Models.Domain;
using Microsoft.EntityFrameworkCore;

public class LoanService : ILoanService
{
    private readonly ApplicationDbContext dbContext;

    public LoanService(ApplicationDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public async Task<Loan> CreateAsync(Loan loan)
        {
            await dbContext.Loans.AddAsync(loan);
            await dbContext.SaveChangesAsync();

        return loan;
    }

    public async Task<IEnumerable<Loan>> GetAllAsync()
    {
        return await dbContext.Loans.ToListAsync();
    }

    public async Task<Loan> GetByIdAsync(int loanId)
    {
        return await dbContext.Loans.FirstOrDefaultAsync(loan => loan.LoanId == loanId);
    }

    public async Task<bool> UpdateAsync(Loan loan)
    {
        Loan loanInDb = await dbContext.Loans.FirstOrDefaultAsync(loanObj => loanObj.LoanId == loan.LoanId);
        Loan duplicateLoan = await dbContext.Loans.FirstOrDefaultAsync(loanObj => loanObj.LoanType == loan.LoanType);

        if(loanInDb != null && duplicateLoan == null)
        {
            loanInDb.LoanType = loan.LoanType;
            loanInDb.Description = loan.Description;
            loanInDb.InterestRate = loan.InterestRate;
            loanInDb.MaximumAmount = loan.MaximumAmount;

            await dbContext.SaveChangesAsync();
            return true;
        }

        return false;
    }
}
