using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace task3
{
    public interface IRenderer
    {
        void Render(string shapeType);
    }
    public class VectorRenderer : IRenderer
    {
        public void Render(string shapeType)
        {
            Console.WriteLine($"Drawing {shapeType} as vectors");
        }
    }
    public class RasterRenderer : IRenderer
    {
        public void Render(string shapeType)
        {
            Console.WriteLine($"Drawing {shapeType} as pixels");
        }
    }
}
