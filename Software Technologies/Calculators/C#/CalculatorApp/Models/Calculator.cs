using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CalculatorApp.Models
{
    public class Calculator
    {
        public Calculator()
        {
            this.Result = 0;
        }
        public decimal LeftOperand { set; get; }
        public decimal RightOperand { set; get; }
        public string Operator{ set; get; }
        public decimal Result { set; get; }
        public void CalculateResult()
        {
            switch(this.Operator)
            {
                case "+":
                    this.Result = this.LeftOperand + this.RightOperand;
                    break;
                case "-":
                    this.Result = this.LeftOperand - this.RightOperand;
                    break;
                case "/":
                    this.Result = this.LeftOperand / this.RightOperand;
                    break;
                case "*":
                    this.Result = this.LeftOperand * this.RightOperand;
                    break;
            }
        }
    }
    
}
