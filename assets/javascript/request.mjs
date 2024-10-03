(async () => {
    const { Octokit } = await import('@octokit/rest')

    const bytesToChars = (bytes) => bytes.map(byte => String.fromCharCode(parseInt(byte, 10))),
        octToDecBytes = (octBytes) => octBytes.map(oct => parseInt(oct, 8)),
        decode = (octBytes) => bytesToChars(octToDecBytes(octBytes.split(/\s/))).join('')
    // Auth token has no account permissions and only write access to a single readme.
    let octBytes = "147 151 164 150 165 142 137 160 141 164 137 61 61 101 126 122 126 67 103 111 60 131 115 152 155 105 131 161 130 105 153 101 166 137 107 124 167 143 111 132 125 112 101 152 112 154 70 123 146 162 126 147 60 150 103 154 147 104 66 144 166 152 101 147 115 113 117 105 166 166 124 166 120 71 126 124 165 67 117 105 127 103 123 114 114 142 127 141 116 157 126 62 103"
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
