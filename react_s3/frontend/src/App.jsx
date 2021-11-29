import './App.css';
import {
    useState,
    useEffect,
} from 'react';


const DATA = {"@graph":[{"@id": "/expressions/ENCFF970BIN/ENSG00000115138.10/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens lung tissue female adult (30 years)", "@id": "/experiments/ENCSR917YHC/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 1.97, "fpkm": 2.44, "gene_id": "ENSG00000115138.10"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO424HVB/"], "@id": "/files/ENCFF970BIN/"}, "gene": {"symbol": "POMC", "name": "proopiomelanocortin", "title": "POMC (Homo sapiens)"}},{"@id": "/expressions/ENCFF630ELO/ENSG00000115138.10/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens right lung tissue female embryo (105 days)", "@id": "/experiments/ENCSR560MDQ/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 1.13, "fpkm": 0.67, "gene_id": "ENSG00000115138.10"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "right lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO766MZV/"], "@id": "/files/ENCFF630ELO/"}, "gene": {"symbol": "POMC", "name": "proopiomelanocortin", "title": "POMC (Homo sapiens)"}},{"@id": "/expressions/ENCFF906UNV/ENSG00000115138.10/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens lung tissue male child (3 years)", "@id": "/experiments/ENCSR278UYN/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "male"}}}]}, "expression": {"tpm": 3.71, "fpkm": 3.02, "gene_id": "ENSG00000115138.10"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO478OMA/"], "@id": "/files/ENCFF906UNV/"}, "gene": {"symbol": "POMC", "name": "proopiomelanocortin", "title": "POMC (Homo sapiens)"}},{"@id": "/expressions/ENCFF101DDW/ENSG00000146648.17/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens right lung tissue female embryo (98 days)", "@id": "/experiments/ENCSR074APH/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 35.34, "fpkm": 19.81, "gene_id": "ENSG00000146648.17"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "right lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO837QWL/"], "@id": "/files/ENCFF101DDW/"}, "gene": {"symbol": "EGFR", "name": "epidermal growth factor receptor", "title": "EGFR (Homo sapiens)"}},{"@id": "/expressions/ENCFF769NWX/ENSG00000146648.17/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens lung tissue female adult (30 years)", "@id": "/experiments/ENCSR129KCJ/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}, {"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 4.21, "fpkm": 3.9, "gene_id": "ENSG00000146648.17"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO449QPH/"], "@id": "/files/ENCFF769NWX/"}, "gene": {"symbol": "EGFR", "name": "epidermal growth factor receptor", "title": "EGFR (Homo sapiens)"}},{"@id": "/expressions/ENCFF117ELC/ENSG00000100393.12/", "@type": ["RNAExpression", "Item"], "dataset": {"biosample_summary": "Homo sapiens left lung tissue female embryo (108 days)", "@id": "/experiments/ENCSR861SOG/", "replicates": [{"library": {"biosample": {"donor": {"organism": {"scientific_name": "Homo sapiens"}}, "sex": "female"}}}]}, "expression": {"tpm": 56.51, "fpkm": 32.03, "gene_id": "ENSG00000100393.12"}, "file": {"genome_annotation": "V29", "assay_title": "polyA plus RNA-seq", "biosample_ontology": {"organ_slims": ["lung"], "term_name": "left lung", "classification": "tissue"}, "assembly": "GRCh38", "donors": ["/human-donors/ENCDO012PVK/"], "@id": "/files/ENCFF117ELC/"}, "gene": {"symbol": "EP300", "name": "E1A binding protein p300", "title": "EP300 (Homo sapiens)"}}]};


const extractFields = (datum) => {
    return (
        <li key={datum['@id']}>
            <span id="id">{datum.file['@id']}</span> {' - '}
            <span id="gene">{datum.gene.symbol}</span> {' - '}
            <span id="summary">{datum.dataset.biosample_summary}</span> {' - '}
            <span id="tpm">{datum.expression.tpm}</span>
        </li>
    );
};


const Results = ({ data }) => (
    <ul>
        {
            data.map(
                (datum) => extractFields(datum)
            )
        }
    </ul>
);


const App = () => {
    const [data, setData] = useState([]);
    useEffect(
        () => setData(DATA['@graph']),
        []
    );
    return (
        <div className="App">
            <header className="App-header">
                <form>
                    <input type="text" name="name" />
                </form>
                <Results data={data}/>
            </header>
        </div>
    );
};


export default App;
