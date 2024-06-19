// export async function load({ fetch }) {
//     const contributions = await (await fetch('https://skyline.github.com/awindest/2023.json', 
//                                                 { headers: { 'Access-Control-Allow-Origin': '*',
//                                                     'Content-Type': 'application/json',
//                                                     'User-Agent': awindest,
//                                                     Accept: 'application/vnd.github+json'
//                                                 }})).json()
//     console.log(contributions)
//     return { contributions }
// }