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
        private bool _isAvailable = true;

        public event Action<Aircraft>? Landed;
        public event Action<Aircraft>? TakenOff;

        public bool IsAvailable()
        {
            return _isAvailable;
        }

        public void Land(Aircraft aircraft)
        {
            if (IsAvailable())
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is landing on Runway {Id}");
                _isAvailable = false;
                Landed?.Invoke(aircraft);
            }
            else
            {
                Console.WriteLine($"Runway {Id} is busy. Aircraft {aircraft.Name} cannot land.");
            }
        }

        public void TakeOff()
        {
            if (!_isAvailable)
            {
                Console.WriteLine($"Aircraft is taking off from Runway {Id}");
                _isAvailable = true;
                TakenOff?.Invoke(null);
            }
        }
    }
}
