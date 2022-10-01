


class Calculator:

    # shared class variables
    allocated = 0


    def __init__(self, name):
        """ Constructor
        name: The name of the calculator instance """
        self._name = name
        Calculator.allocated += 1


    def get_name(self):
        return self._name

    @staticmethod
    def add(x, y):
        """ Method to perform addition """
        return x + y


def main():


    rslt = Calculator.add(4,5)
    print(rslt)

    c1 = Calculator("HP 41CV")
    c2 = Calculator("TI 30")
    c3 = Calculator("calcy the calculator")

    rslt = c1.add(2,2)
    print(rslt)

    rslt2 = c2.add(2,2)
    print(rslt2)

    print("Number of calculators: ", Calculator.allocated)




main()




