
export default {
    /**
     * @version 1.0
     * @author shuaijg
     * @method 清空对象中的数据(可以是数组或字符串)
     * @param data 数据对象
     */
    wipeObjectData(data) {
        data = data || {};
        if (!data) return;
        for (let item in data) {
            if (data[item] instanceof Array) {
                data[item] = [];
            } else if (typeof data[item] === "string") {
                data[item] = "";
            }
        }
        return data;
    }
}