import moment from "moment/moment";
import "moment/locale/tr";


// unix formatındaki veriyi normal tarihe çevirme
const formatDate = (unix_time) => {
    // new date ms üzerinden işlem yapar, ama unix time 1970'ten itiabren geçen süreyi sn cinsinden verir. bu yüzden 1000 ile çarpılır
    const date= new Date(unix_time * 1000);

    return moment(date).calendar();
}

export default formatDate;