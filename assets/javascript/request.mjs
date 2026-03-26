(async () => {
    const { Octokit } = await import('@octokit/rest')

    const bytesToChars = (bytes) => bytes.map(byte => String.fromCharCode(parseInt(byte, 10))),
        octToDecBytes = (octBytes) => octBytes.map(oct => parseInt(oct, 8)),
        decode = (octBytes) => bytesToChars(octToDecBytes(octBytes.split(/\s/))).join('')
    // Fine-grn with no account permissions and only write access to a single readme. You won't be able to do much with this...
    let octBytes = "147 151 164 150 165 142 137 160 141 164 137 61 61 101 126 122 126 67 103 111 60 127 170 127 153 167 164 162 126 105 163 156 71 137 153 142 117 116 130 155 61 172 126 67 66 141 112 70 101 165 124 154 104 165 157 110 131 124 163 162 162 103 151 115 165 172 102 156 102 156 110 150 67 62 151 101 107 64 63 101 122 103 126 107 124 141 132 123 107 110 166 143 124";
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
