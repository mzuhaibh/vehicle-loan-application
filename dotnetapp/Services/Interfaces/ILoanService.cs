using dotnetapp.Models.Domain;

public interface ILoanService
{
    Task<Loan> CreateAsync(Loan loan);
}
