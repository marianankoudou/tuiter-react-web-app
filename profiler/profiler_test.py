from profiler import profile, Profiler


@profile
def squares(n):
    return [i ** 2 for i in range(n)]


def main():
    sq = squares(1000000)
    sq2 = squares(1000000)

    Profiler.report()


main()
