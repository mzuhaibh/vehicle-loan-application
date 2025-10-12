using dotnetapp.Data;
using dotnetapp.Models.Domain;

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
}
