using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task2
{
    class Aircraft
    {
        public string Name { get; }
        public Runway? CurrentRunway { get; private set; }
        public Aircraft(string name)
        {
            Name = name;
        }
        public void AssignRunway(Runway runway)
        {
            CurrentRunway = runway;
        }
    }
}
