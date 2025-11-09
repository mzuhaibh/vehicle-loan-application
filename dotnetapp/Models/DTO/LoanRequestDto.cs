namespace dotnetapp.Models.DTO
{
    public class LoanRequestDto
    {
        public int LoanId { get; set; }
        public string LoanType { get; set; }
        public string Description { get; set; }
        public decimal InterestRate { get; set; }
        public decimal MaximumAmount { get; set; }
    }
}
