print(1, 2, 3, 4, 5, "hello", True, [1, 2, 3, 4])
print(max(3, 42, 7, -5, 3))


def mysum(*args, **kwargs):
    print("What is args? ", type(args), args)
    print("What is kwargs? ", type(kwargs), kwargs)
    print(sum(args))


mysum(5, 6, 7, 8, 9, 10, 11, 12, a="hello", b=52, c=True, sepp='|')
