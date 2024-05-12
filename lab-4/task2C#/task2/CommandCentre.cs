using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2
{
    class CommandCentre
    {
        private List<Runway> _runways = new List<Runway>();
        private List<Aircraft> _aircrafts = new List<Aircraft>();
        public CommandCentre(Runway[] runways, Aircraft[] aircrafts)
        {
            _runways.AddRange(runways);
            _aircrafts.AddRange(aircrafts);
        }
        public bool RequestLanding(Aircraft aircraft)
        {
            foreach (var runway in _runways)
            {
                if (runway.IsAvailable())
                {
                    runway.Land(aircraft);
                    return true;
                }
            }
            Console.WriteLine($"No available runway for {aircraft.Name}");
            return false;
        }
        public void RequestTakeoff(Aircraft aircraft)
        {
            var runway = aircraft.CurrentRunway;
            if (runway != null)
            {
                runway.TakeOff(aircraft);
            }
            else
            {
                Console.WriteLine($"Aircraft {aircraft.Name} is not on any runway.");
            }
        }
    }
}
