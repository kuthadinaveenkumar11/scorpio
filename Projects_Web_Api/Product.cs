//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Projects_Web_Api
{
    using System;
    using System.Collections.Generic;
    
    public partial class Product
    {
        public string Name { get; set; }
        public string Product_id { get; set; }
        public decimal Price { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public byte[] Image { get; set; }
        public int Quantity { get; set; }
        public string PANNo { get; set; }
    
        public virtual distributerlogin distributerlogin { get; set; }
    }
}
