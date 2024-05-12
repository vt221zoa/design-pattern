using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2
{
    class Runway
    {
        public readonly Guid Id = Guid.NewGuid();
        private Aircraft? _aircraft;

        public bool IsAvailable()
        {
            return _aircraft == null;
        }
        public void Land(Aircraft aircraft)
        {
            if (IsAvailable())
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is landing on Runway {Id}");
                _aircraft = aircraft;
            }
            else
            {
                Console.WriteLine($"Runway {Id} is busy. Aircraft {aircraft.Name} cannot land.");
            }
        }
        public void TakeOff(Aircraft aircraft)
        {
            if (_aircraft == aircraft)
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is taking off from Runway {Id}");
                _aircraft = null;
            }
            else
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is not on Runway {Id}. Cannot take off.");
            }
        }
    }
}
