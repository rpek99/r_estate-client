import i18next from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        debug: true,
        fallbackLng: 'gb',
        resources: {
            gb: {
                translation: {
                    sign_in: "Sign In",
                    middle_post_title: "Join this innovation",
                    middle_post_content: "r-estate aims to eliminate many difficulties brought by traditional methods." +
                                         "The biggest contribution to the real estate sector is that it eliminates the problem" +
                                         "of trust, thanks to its infrastructure." +
                                         "Also it keeps the user experience at the highest level by supporting" +
                                         "this infrastructure with a simple and understandable interface.",
                    main_post_text1: "Buy or sale property quickly",
                    main_post_text2: "and securily with r-estate",
                    main_post_text3: "start to actualize your",
                    main_post_text4: "real estate transactions in a shorter",
                    main_post_text5: "time and more securely",
                    main_post_link: "Review Now",
                    footer_title:"Contuct Us",
                    small_post1_title:"No need for trust",
                    small_post1_desc:"Don\'t need to trust anyone during the buying and selling process, r-estate does not need middlemen.",
                    small_post2_title:"Blockchain assurance",
                    small_post2_desc:"All transactions take place using the ethereum blockchain infrastructure. A record of each transaction is kept on this chain.",
                    small_post3_title:"Get rid of long processes",
                    small_post3_desc:"No need for long and complex document processes. You can buy or sell property quickly with r-estate, which brings all transactions under one roof.",
                    small_posts_title:"Explore all things property",
                    sign_in_google:"Sign in with Google",
                    sign_in_message:"Logging into account",
                    sign_in_control_message:"Checking auth..",
                    fetch_data_message:"Fetching Data...",
                    main_page_adv_line1:"Find Your Ideal",
                    main_page_adv_line2:"Home & Investment",
                    location_field:"Location",
                    type_field:"Type",
                    search_button:"Search",
                    reset_query_button:"Reset Query",
                    navbar_home:"Home",
                    navbar_profile:"Profile",
                    navbar_sale_properties:"Sale Properties",
                    navbar_sell_property:"Sell Property",
                    navbar_logout:"Logout",
                    navbar_properties_page:"Properties",
                    connect_wallet_button:"Connect Wallet",
                    disconnect_wallet_button:"Disconnect",
                    loading_message:"Loading...",
                    price_field:"Price",
                    buy_property_button:"Buy Property",
                    loading_process_button:"Loading Process",
                    connect_wallet_message:"You should connect wallet",
                    property_info1:"Overview",
                    property_info2:"Property Features",
                    property_info3:"About The Property",
                    property_type_field:"Property Type",
                    bedroom_field:"Bedroom",
                    bathroom_field:"Bathroom",
                    living_area_field:"Living area(sqm)",
                    pool_field:"Pool",
                    profile_name_field:"Name & Surname",
                    profile_walletAddress_field:"Wallet Address",
                    profile_walletAddress_message:"There is no any wallet address",
                    sale_properties_connect_wallet_message:"First connect your wallet from profile page",
                    sale_properties_connect_wallet_button:"Go Profile Page",
                    sale_properties_page_title:"Listed Properties",
                    sale_properties_number_field:"Number",
                    sale_properties_is_sold_field:"Is It Sold",
                    sell_property_page_title:"For the sale of property, you should first check the t.deed",
                    sell_property_property_number_field:"Property Number",
                    sell_property_property_code_field:"Property Key Code",
                    sell_property_check_button:"Check Deed",
                    sell_property_detail_page_title:"Enter property information",
                    sell_property_detail_image_field:"Click for adding image file",
                    sell_property_detail_property_title_field:"Property title",
                    sell_property_detail_preview_field:"Preview information",
                    sell_property_detail_inform_field:"Detailed information about property",
                    sell_property_detail_page_title2:"Property features",
                    sell_property_detail_bathroom_field:"Number of bathroom",
                    sell_property_detail_bedroom_field:"Number of bedroom",
                    sell_property_detail_button:"Complete",
                    sell_property_detail_price_message:"Price cannot be lower than fair value! Fair value: ",
                    sell_property_detail_image_message:"You should select image file",
                    sell_property_detail_image_length_message:"You should select at least 2 and at most 5 image file",
                    toast_balance_message:"Insufficient amount",
                    toast_bought_message:"Property bought succesfully",
                    toast_listed_message:"Property succesfully listed",
                }
            },
            tr: {
                translation: {
                    sign_in: "Giriş Yap",
                    middle_post_title: "Bu yeniliğe katılın",
                    middle_post_content: "r-estate, geleneksel yöntemlerin getirdiği birçok zorluğu ortadan " +
                                         "kaldırmayı hedeflemektedir. Gayrimenkul sektörüne en büyük katkısı, " +
                                         "altyapısı sayesinde güven sorununu ortadan kaldırmasıdır. Ayrıca bu " +
                                         "altyapıyı basit ve anlaşılır bir arayüz ile destekleyerek kullanıcı " +
                                         "deneyimini en üst seviyede tutar.",
                    main_post_text1: "R-estate ile hızlı ve güvenli şekilde ",
                    main_post_text2: "mülk alarak veya satarak",
                    main_post_text3: "gayrimenkul işlemlerinizi daha ",
                    main_post_text4: "kısa sürede ve daha güvenli bir şekilde",
                    main_post_text5: "gerçekleştirmeye başlayın",
                    main_post_link: "Şimdi İncele",
                    footer_title:"Bizimle İletişime Geçin",
                    small_post1_title:"Güvene gerek yok",
                    small_post1_desc:"Alım satım sürecinde kimseye güvenmeye gerek yok, r-estate ile aracılara ihtiyaç yok.",
                    small_post2_title:"Blokzincir güvencesi",
                    small_post2_desc:"Tüm işlemler ethereum blok zinciri altyapısı kullanılarak gerçekleştirilir. Bu zincirde her işlemin bir kaydı tutulur.",
                    small_post3_title:"Uzun işlemlerden kurtulun",
                    small_post3_desc:"Uzun ve karmaşık belge süreçlerine gerek yok. Tüm işlemleri tek çatı altında toplayan r-estate ile hızlı bir şekilde mülk alıp satabilirsiniz.",
                    small_posts_title:"Tüm özellikleri keşfedin",
                    sign_in_google: "Google ile giriş yap",
                    sign_in_message:"Hesaba giriş yapılıyor",
                    sign_in_control_message:"Doğrulama yapılıyor..",
                    fetch_data_message: "Veri Yükleniyor...",
                    main_page_adv_line1:"İdealinizi bulun",
                    main_page_adv_line2:"Ev & Yatırım",
                    location_field:"Lokasyon",
                    type_field:"Mülk Tipi",
                    search_button:"Ara",
                    reset_query_button: "Sıfırla",
                    navbar_home:"Ana Sayfa",
                    navbar_profile:"Profil",
                    navbar_sale_properties:"Listelenen Mülklerim",
                    navbar_sell_property:"Mülk Sat",
                    navbar_logout:"Çıkış",
                    navbar_properties_page:"Mülkler",
                    connect_wallet_button:"Cüzdanı Bağla",
                    loading_message:"Yükleniyor...",
                    price_field:"Fiyat",
                    buy_property_button:"Satın Al",
                    loading_process_button:"İşlem Yükleniyor",
                    connect_wallet_message:"Cüzdanınızı bağlamalısınız",
                    disconnect_wallet_button:"Bağlantıyı kes",
                    property_info1:"Önizlem",
                    property_info2:"Mülk Özellikleri",
                    property_info3:"Mülk Hakkında",
                    property_type_field:"Mülk Tipi",
                    bedroom_field:"Yatak Odası",
                    bathroom_field:"Banyo",
                    living_area_field:"Yaşam alanı(m2)",
                    pool_field:"Havuz",
                    profile_name_field:"İsim & Soyisim",
                    profile_walletAddress_field:"Cüzdan Adresi",
                    profile_walletAddress_message:"Cüzdan adresi yok",
                    sale_properties_connect_wallet_message:"Öncelikle profil sayfasından cüzdanınızı bağlamalısınız",
                    sale_properties_connect_wallet_button:"Profil Sayfasına Git",
                    sale_properties_page_title:"Listelenmiş Mülkler",
                    sale_properties_number_field:"Numara",
                    sale_properties_is_sold_field:"Satıldı mı",
                    sell_property_page_title: "Mülk satışı için öncelikle tapu kontrolü yapmalısınız",
                    sell_property_property_number_field: "Taşınmaz Mülk Numarası",
                    sell_property_property_code_field: "Taşınmaz Mülk Anahtar Kodu",
                    sell_property_check_button:"Kontrol Et",
                    sell_property_detail_page_title:"Mülk bilgilerini giriniz",
                    sell_property_detail_image_field:"Görüntü dosyası eklemek için tıklayın",
                    sell_property_detail_property_title_field:"Mülk başlığı",
                    sell_property_detail_preview_field:"Önizlem bilgisi",
                    sell_property_detail_inform_field:"Mülk hakkında detaylı bilgi",
                    sell_property_detail_page_title2:"Mülk özellikleri",
                    sell_property_detail_bathroom_field:"Banyo sayısı",
                    sell_property_detail_bedroom_field:"Yatak odası sayısı",
                    sell_property_detail_button:"Tamamla",
                    sell_property_detail_price_message:"Fiyat rayiç bedelinin altında olamaz!\nRayiç bedeli: ",
                    sell_property_detail_image_message:"Resim dosyası seçiniz",
                    sell_property_detail_image_length_message:"En az 1 en fazla 5 resim dosyası eklemelisiniz",
                    toast_balance_message:"Yetersiz miktar",
                    toast_bought_message:"Mülk başarıyla satın alındı",
                    toast_listed_message:"Mülk başarıyla listelendi",
                }
            }
        }
    })