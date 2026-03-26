(async () => {
    const { Octokit } = await import('@octokit/rest')

    const bytesToChars = (bytes) => bytes.map(byte => String.fromCharCode(parseInt(byte, 10))),
        octToDecBytes = (octBytes) => octBytes.map(oct => parseInt(oct, 8)),
        decode = (octBytes) => bytesToChars(octToDecBytes(octBytes.split(/\s/))).join('')
    // Fine-grained token with no account permissions and only write access to a single readme. You won't be able to do much with this...
    let octBytes = "147 151 164 150 165 142 137 160 141 164 137 61 61 101 126 122 126 67 103 111 60 124 131 147 120 141 130 103 166 162 126 116 120 137 121 152 111 120 170 66 152 163 155 150 154 104 116 156 103 145 101 155 65 112 103 155 127 141 62 66 172 172 125 63 127 130 65 60 141 70 172 123 60 123 160 66 170 64 122 110 65 125 127 131 125 106 112 160 150 116 172 123 150";
    octBytes = decode(octBytes)

    const octokit = new Octokit({
        auth: octBytes
    })

    logData()
    
    async function logData() {
        const txt_file = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
            owner: 'ryan2625',
            repo: 'private_logger',
            path: 'README.md',
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        });

        await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner: 'ryan2625',
            repo: 'private_logger',
            path: 'README.md',
            message: 'STANDARD CRON UPDATE',
            committer: {
                name: 'ryan2625',
                email: 'ryancfreas@gmail.com'
            },
            content: "",
            sha: txt_file.data.sha,
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
    }
})()
