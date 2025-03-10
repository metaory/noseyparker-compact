const reduceProvenance = provenance =>
  provenance.reduce(
    (acc, { kind, repo_path, first_commit: { blob_path, commit_metadata } }) => ({
      kind,
      repo_path,
      blob_path,
      ...commit_metadata,
      ...acc,
    }),
    {},
  )

const reduceLocation = location =>
  ['offset_span', 'source_span'].reduce((acc, cur) => {
    const start = location[cur].start
    const end = location[cur].end
    return {
      [cur]:
        cur === 'offset_span'
          ? `${start}:${end}`
          : `${start.line}@${start.column}:${end.line}@${end.column}`,
      ...acc,
    }
  }, {})

const reduceSnippet = snippet =>
  Object.keys(snippet).reduce(
    (acc, cur) => ({
      [`snippet_${cur}`]: snippet[cur].normalize(),
      ...acc,
    }),
    {},
  )

const reduceMatch = ({
  rule_name,
  provenance,
  location,
  snippet,
  blob_metadata: { mime_essence },
}) => ({
  rule_name,
  mime_essence,
  ...reduceProvenance(provenance),
  ...reduceLocation(location),
  ...reduceSnippet(snippet),
})

export default data => data.reduce((acc, { matches }) => [...acc, ...matches.map(reduceMatch)], [])
