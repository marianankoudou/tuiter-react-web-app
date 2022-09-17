import plotly.graph_objects as go
import pandas as pd

def code_mapping(df, src, targ):
        """ Map labels in src and targ columns to integers """
    pass

def make_sankey(df, src, targ, vals):
    pass




# This doesn't actually work
# labels need to be mapped to integer codes

link = {'source': df.source, 'target': df.target, 'value': df.value,
        'line': {'color': 'black', 'width': 2}}

node = {'label': ['?'] * 8, 'pad': 100, 'thickness': 10,
        'line': {'color': 'black', 'width': 2}}

sk = go.Sankey(link=link, node=node)
fig = go.Figure(sk)
fig.show()
