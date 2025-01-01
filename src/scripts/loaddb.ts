// load db // scrape internet for info

import {DataAPIClient } from "@datastax/astra-db-ts"

import OpenAI from 'openai'
import {RecursiveCharacterTextSplitter} from 'langchain/text_splitter' // split up large internet text for digestible answers
import "dotenv/config"
import { PuppeteerWebBaseLoader } from '@langchain/community/document_loaders/web/puppeteer';
