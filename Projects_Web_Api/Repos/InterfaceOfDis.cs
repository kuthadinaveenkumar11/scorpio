﻿using Projects_Web_Api.Models;
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
        string Get_of_Drisributer_Login(string Id, string password);
        string Distributor_Profile_Data( Model_Of_Drisributer_Profile);

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
            var dis = obj.distributerlogins.Where(n => n.username ==username&& n.password==password).FirstOrDefault();
            if (dis != null)
            {
                return "exist";
            }
            return "not";
            
        }

    }

}
