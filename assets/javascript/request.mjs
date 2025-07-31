(async () => {
    const { Octokit } = await import('@octokit/rest')

    const bytesToChars = (bytes) => bytes.map(byte => String.fromCharCode(parseInt(byte, 10))),
        octToDecBytes = (octBytes) => octBytes.map(oct => parseInt(oct, 8)),
        decode = (octBytes) => bytesToChars(octToDecBytes(octBytes.split(/\s/))).join('')
    // Fine-grained token with no account permissions and only write access to a single readme. You won't be able to do much with this...
    let octBytes = "147 151 164 150 165 142 137 160 141 164 137 061 061 101 126 122 126 067 103 111 060 064 152 143 070 106 166 106 157 061 113 164 113 137 126 142 157 126 114 066 126 065 152 066 152 154 063 120 111 125 152 123 065 062 151 172 063 143 154 066 120 127 107 151 124 066 061 150 165 067 114 111 062 123 147 170 067 103 116 127 123 124 115 111 126 064 061 124 116 061 167 160 116"
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
