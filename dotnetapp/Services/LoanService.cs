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
}
