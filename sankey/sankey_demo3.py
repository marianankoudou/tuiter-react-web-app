import plotly.graph_objects as go

# import plotly.io as pio
# pio.renderers.default = "browser" # also, close opera!

source = [0, 0, 3, 3]
target = [1, 2, 2, 1]
value = [1, 2, 3, 4]
label = ['A', 'B', 'C', 'D']

link = {'source': source, 'target': target, 'value': value,
        'line': {'color': 'black', 'width': 2}}

node = {'label': label, 'pad': 100, 'thickness': 10,
        'line': {'color': 'black', 'width': 2}}

sk = go.Sankey(link=link, node=node)
fig = go.Figure(sk)
fig.show()
