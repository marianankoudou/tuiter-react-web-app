"""
decorator.py

A demonstration of decorators
"""

import time


def notify(f):
    """ A decorator that reports when you call a function """

    def wrapper():
        print("Running the function")
        f()
        print("Finished running.")

    return wrapper


def do_twice(f):
    def wrapper(*args, **kwargs):
        f(*args, **kwargs)
        f(*args, **kwargs)

    return wrapper


@do_twice
def hello_world():
    print("Hello World")


@do_twice
def say_hello(name):
    print("Hello", name)


def timer(f):
    """ Return (runtime, result) when f is called """

    def wrapper(*args, **kwargs):
        start = time.time()
        val = f(*args, **kwargs)
        end = time.time()
        elapsed = end - start
        return elapsed, val

    return wrapper


@timer
def squares(n):
    return [i ** 2 for i in range(n)]


def main():
    elapsed, sq = squares(1000000)
    print(sq)
    print("Elapsed time: ", elapsed)


main()
