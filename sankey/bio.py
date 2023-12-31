"""
File: bio.py
Description: Demonstration of the sankey library
"""

import pandas as pd
import sankey as sk


def main():
    df = pd.read_csv('bio.csv')
    sk.make_sankey(df, 'disease', 'gene', 'pubs', pad=50, thickness=20, line_width=2)


main()
