﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2.Inventories
{
    public class Artifacts : IInventory
    {
        public void Equip()
        {
            Console.WriteLine("Equipping artifacts");
        }
    }
}
