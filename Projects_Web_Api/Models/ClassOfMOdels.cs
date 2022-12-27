using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Projects_Web_Api.Models
{
    public class Model_Of_Drisributer_Profile
    {
        public string Name { get; set; }
        public decimal ContactNumber { get; set; }
        public string FirmName { get; set; }
        public string Address { get; set; }
        public int TINNo { get; set; }
        public string PANNo { get; set; }
        public string BankIFSCCode { get; set; }
        public decimal BankAccountNumber { get; set; }
    }
}