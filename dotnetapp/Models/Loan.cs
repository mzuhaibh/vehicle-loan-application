namespace dotnetapp.Models
{
    public class Loan
    {
        public int LoanId { get; set; }
        public string LoanType { get; set; }
        public string Description { get; set; }
        public decimal InterestRate {  get; set; }
        public decimal MaximumAmount { get; set; }
    }
}
