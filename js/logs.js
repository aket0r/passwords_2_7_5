class Logs {
    constructor() {
        let directionName = 'passwords_data';
        let dir = os.userInfo().homedir.replaceAll('\\', '/');
        let m_dir = `${dir}/Documents/${directionName}`
        Logs.load(`${m_dir}/logs.json`);
    }

    static load(file) {
        let bufferData = fs.readFileSync(file)
        let stData = bufferData.toString()
        let data = JSON.parse(stData)
        logList = data;
    }

    use(date = null, context, status, upd = true, color, text) {
        if(date == null || !date) date = new Date().toISOString();
        let path = document.querySelector(".history");
        let style = '';
        const time = record(true) // stop recording.
        const item = document.createElement("div");
        item.id = 'item-console-content';
        item.className = status;
        item.innerHTML = 
        `<div id="date-of-create">
            ${date}
        </div>
        <div id="message" ${style}>
            ${context || 'OK'} (${time.s}.${time.ms}ms.)
        </div>`
        path.prepend(item);
        if(upd) {
            logList.push({
                createdAt: date,
                message: context?.replaceAll('<br>', '\n'),
                text: text,
                status: status
            })
            this.update();
        }
    }

    update() {
        let directionName = 'passwords_data';
        let dir = os.userInfo().homedir.replaceAll('\\', '/');
        let m_dir = `${dir}/Documents/${directionName}`;
        fs.writeFileSync(`${m_dir}/logs.json`, JSON.stringify(logList, null, '\t'));
    }

    reset() {
        logList = [];
        let directionName = 'passwords_data';
        let dir = os.userInfo().homedir.replaceAll('\\', '/');
        let m_dir = `${dir}/Documents/${directionName}`;
        fs.writeFileSync(`${m_dir}/logs.json`, JSON.stringify(logList, null, '\t'));
        notification.use('System', 'Перезагрузка.');
        setTimeout(() => {
            location.reload();
        }, 4000);
    }
}

const logs = new Logs();