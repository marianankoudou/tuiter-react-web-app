import plotly.graph_objects as go


def code_mapping(df, src, targ):
    """ Maps labels / strings in src and target
    and converts them to integers 0,1,2,3... """

    # Extract distinct labels
    labels = sorted(list(set(list(df[src]) + list(df[targ]))))

    # define integer codes
    codes = list(range(len(labels)))

    # pair labels with list
    lc_map = dict(zip(labels, codes))

    # in df, substitute codes for labels
    df = df.replace({src: lc_map, targ: lc_map})

    return df, labels


def make_sankey(df, src, targ, vals):
    """Generate the sankey diagram """

    df, labels = code_mapping(df, src, targ)

    link = {'source': df[src], 'target': df[targ], 'value': df[vals]}
    node = {'label': labels}

    sk = go.Sankey(link=link, node=node)
    fig = go.Figure(sk)
    fig.show()
