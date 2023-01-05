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
    public class Distributerlogin
    {
        public string username { get; set; }
        public string password { get; set; }
        public string PANNo { get; set; }

        public virtual distributer_profile distributer_profile { get; set; }
    }
     public class Model_of_Product
    {
        public string Name { get; set; }
        public string Product_id { get; set; }
        public decimal Price { get; set; }
        public string Type { get; set; }
        public string Discription { get; set; }
        public string image { get; set; }
        public int Quantity { get; set; }

    }
    public class Model_of_Dis_product
    {
        public string Name { get; set; }
        public string Product_id { get; set; }
        public decimal Price { get; set; }
        public string Type { get; set; }
        public string Descripction { get; set; }
        public string PANno { get; set; }
        public string Image { get; set; }
        public Nullable<int> Quantity { get; set; }
    }

}