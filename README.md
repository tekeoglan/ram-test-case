## İlk Adım
- BoirlerPlate kodları hazıladım.
- [Global Styles](https://github.com/tekeoglan/ram-test-case/blob/012b206c00d82c24c1ba6ae2e14c121559b73bbb/src/constants/styles.ts "Global Styles"), Config, vb.
- Sonra dosya yapımı kurguladım.
## İkinci Adım
- Kod yazarken Olabildiğince reusibility prensibine dikkat ettim.
- Pagination verisini düzgün çekebilmek için custom olarak [useFetch](https://github.com/tekeoglan/ram-test-case/blob/012b206c00d82c24c1ba6ae2e14c121559b73bbb/src/hooks/useFetch.ts "useFetch") hook oluşturdum.
- Pagination için, FlatList componentini kullanarak  infinite scrolling methoduyla [PaginatioatedList](https://github.com/tekeoglan/ram-test-case/blob/012b206c00d82c24c1ba6ae2e14c121559b73bbb/src/components/list/PaginatedList.tsx "PaginatioatedList") companentini tasarladım.
- Datanın çekildiği yer ile UI'ı ayırmaya özen gösterdim.
## Üçüncü Adım
- Bölüm filtreme kısmında karakter özelliklerine göre gelen query verileriyle çektiğim karakter [datasını episode datasına çevirdim](https://github.com/tekeoglan/ram-test-case/blob/012b206c00d82c24c1ba6ae2e14c121559b73bbb/src/app/index.tsx#L37 "datasını episode datasına çevirdim").
- Uygulamayı dizayn ettiğim şekilde, filtreden gelen datayla normal datayı ayırt etmede sıkıntı yaşamaya başladım ve kod iyice bozulmaya başladı ve uzunca uğraştan sonra orada bıraktım.
## Hatalar
- Bazi yerlerde kodu ayırmak isterken componentler arası kopukluk oldu.
- Zaman yonetimi yapamadıgım için bazı kısımlar karmasık hale geldı.
- Bolumu karaktere gore fıltreleme kısmına takılıp kalmak, en azından routıng ve favorı ekleme yapılabılırdı.
## Eksikler
- Karaktere göre filtreleme
- Karakter ve bolum sayfalari
- Karakter favoriye ekleme
## Kodu Çalıştırmak
Proje expo kullanılarak geliştirilmiştir. Şimdiden değerlendirecek olan kişiye ayırmış olduğu vakit için teşekkür ederim.
```bash
git clone https://github.com/tekeoglan/ram-test-case.git
cd ./ram-test-case
npm run android
```
## Ekstra Bilgi
React teçrübem olmasına rağmen ilk defa react-native ile uygulama geliştirmeye çalıştım oda ekstra zorluk kattı.
