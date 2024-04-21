using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2.Inventories
{
    public class Armor : IInventory
    {
        public void Equip()
        {
            Console.WriteLine("Equipping armor");
        }
    }
}
