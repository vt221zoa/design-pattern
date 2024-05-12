using System;
namespace task2
{
    class Program
    {
        static void Main(string[] args)
        {
            Runway runway1 = new Runway();
            Runway runway2 = new Runway();

            Aircraft aircraft1 = new Aircraft("Boeing 421");
            Aircraft aircraft2 = new Aircraft("Cossacs 111");

            CommandCentre commandCentre = new CommandCentre(new Runway[] { runway1, runway2 }, new Aircraft[] { aircraft1, aircraft2 });

            commandCentre.RequestLanding(aircraft1);
            commandCentre.RequestLanding(aircraft2);

            aircraft1.AssignRunway(runway1);
            aircraft2.AssignRunway(runway2);

            commandCentre.RequestTakeoff(aircraft1);
            commandCentre.RequestTakeoff(aircraft2);
        }
    }
}