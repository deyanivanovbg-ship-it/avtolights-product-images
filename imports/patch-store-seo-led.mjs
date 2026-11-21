// Добавя заглавие/описание за категорията LED-kruski в store-seo скрипта (21.11.2026).
// node patch-store-seo-led.mjs <файл>  - сменя файла на място
import fs from 'fs';
export const OLD = "    var title = 'Стъкла за фарове ' +";
export const NEW = "    if (c && c[1] === 'LED-kruski') {\n"
 + "      var lt = 'LED крушки за фарове H1, H4, H7, H11, HB3, HB4, H15 и D1S-D5S' + (page ? ' - страница ' + page : '') + ' | Avtolights';\n"
 + "      var ld = 'LED крушки за замяна на халогенни (H1, H4, H7, H11, HB3, HB4, H15) и ксенонови (D1S-D5S) крушки. Комплект от 2 броя, от 75 €, 2 години гаранция, наложен платеж.';\n"
 + "      document.title = lt; meta('name', 'description', ld); meta('property', 'og:title', lt); meta('property', 'og:description', ld);\n"
 + "      return;\n"
 + "    }\n" + OLD;
const f = process.argv[2];
if (f) {
  let s = fs.readFileSync(f, 'utf8');
  if (s.includes("c[1] === 'LED-kruski'")) throw new Error('вече е вътре');
  if (s.split(OLD).length !== 2) throw new Error('маркерът не е уникален: ' + (s.split(OLD).length - 1));
  fs.writeFileSync(f, s.replace(OLD, NEW));
  console.log(f, Buffer.byteLength(s.replace(OLD, NEW)), 'байта');
}
