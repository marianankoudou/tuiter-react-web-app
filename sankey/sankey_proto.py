import plotly.graph_objects as go
import pandas as pd

df = pd.read_csv('bio.csv')
print(df)
print(df.source)

# This doesn't actually work
# labels need to be mapped to integer codes

link = {'source': df.source, 'target': df.target, 'value': df.value,
        'line': {'color': 'black', 'width': 2}}

node = {'label': ['?'] * 8, 'pad': 100, 'thickness': 10,
        'line': {'color': 'black', 'width': 2}}

sk = go.Sankey(link=link, node=node)
fig = go.Figure(sk)
fig.show()
