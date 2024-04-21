using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2
{
    public class InventoryManager
    {
        public List<IInventory> inventories = new List<IInventory>();

        public void AddInventory(IInventory inventory)
        {
            inventories.Add(inventory);
        }

        public void EquipAll()
        {
            foreach (var inventory in inventories)
            {
                inventory.Equip();
            }
        }
    }
}
