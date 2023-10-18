export default function formatData(data: string, format: 'dash' | 'slash') {
  if (format === 'dash') {
    return data.replace(/-/g, '/');
  } else if (format === 'slash') {
    return data.replace(/\//g, '-');
  }
}