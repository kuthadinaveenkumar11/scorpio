using Projects_Web_Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Projects_Web_Api.Repos
{
    public interface InterfaceOfDis
    {
        Model_Of_Drisributer_Profile Get_Of_Drisributer_Profile(string PAN);
        string Get_of_Drisributer_Login(string username, string password);

        List<Model_of_Product> Get_Of_Products();
    }
    public class ClassofDis : InterfaceOfDis
    {
        scorpioDBEntities obj = new scorpioDBEntities();

        Model_Of_Drisributer_Profile InterfaceOfDis.Get_Of_Drisributer_Profile(string PAN)
        {
            var dis = obj.distributer_profiles.Where(n=>n.PANNo==PAN).Select(s => new Model_Of_Drisributer_Profile()
            {
                Name = s.Name,
                ContactNumber=s.ContactNumber,
                PANNo=s.PANNo
            }).FirstOrDefault();
            return dis;
        }
        string InterfaceOfDis.Get_of_Drisributer_Login(string username,string password)
        {
            var dis = obj.distributerlogins.Where(n => n.username ==username && n.password==password).FirstOrDefault();
            if (dis != null)
            {
                return "exist";
            }
            return "not";
            
        }
        List<Model_of_Product> InterfaceOfDis.Get_Of_Products()
        {
            List<Model_of_Product> ff = obj.Wareproducts.Select(s => new Model_of_Product()
            {
                Name=s.Name,
                Discription=s.Discription,
                image=s.image,
                Product_id=s.Product_id,
                Price=s.Price,
                Type=s.Type,
                Quantity=s.Quantity
            }).ToList<Model_of_Product>();
            return ff;
        }


    }

}
