import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function GET(req: NextApiRequest, res: NextApiResponse) {
  const { filename } = req.query;
  console.log(filename);
  if (!filename || typeof filename !== 'string') {
    res.status(400).json({ error: 'Filename is required and should be a string' });
    return;
  }

  const filePath = path.join(process.cwd(), 'path-to-your-markdown-files', `${filename}.md`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read markdown file' });
      return;
    }

    res.status(200).json({ content: data });
  });
}
