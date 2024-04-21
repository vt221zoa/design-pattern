using task2;
using task2.Heroes;
using task2.Inventories;

class Program
{
    static void Main(string[] args)
    {
        Warrior warrior = new Warrior();
        Mage mage = new Mage();
        Paladin paladin = new Paladin();

        InventoryManager warriorInventory = new InventoryManager();
        warriorInventory.AddInventory(new Armor());
        warriorInventory.AddInventory(new Weapon());

        InventoryManager mageInventory = new InventoryManager();
        mageInventory.AddInventory(new Artifacts());
        mageInventory.AddInventory(new Weapon());

        InventoryManager paladinInventory = new InventoryManager();
        paladinInventory.AddInventory(new Armor());
        paladinInventory.AddInventory(new Artifacts());
        paladinInventory.AddInventory(new Weapon());

        Console.WriteLine("Warrior Inventory:");
        warrior.Info();
        warriorInventory.EquipAll();

        Console.WriteLine("\nMage Inventory:");
        mage.Info();
        mageInventory.EquipAll();

        Console.WriteLine("\nPaladin Inventory:");
        paladin.Info();
        paladinInventory.EquipAll();
    }
}